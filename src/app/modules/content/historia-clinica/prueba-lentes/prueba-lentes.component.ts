import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-prueba-lentes',
  imports: [
     ButtonModule,
     CommonModule
  ],
  templateUrl: './prueba-lentes.component.html',
  styleUrl: './prueba-lentes.component.scss'
})
export class PruebaLentesComponent implements OnInit, OnDestroy {
  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  isCameraActive = false;
  isModelLoaded = false;
  stream: MediaStream | null = null;
  detectionInterval: any;
  glassesImage: HTMLImageElement | null = null;

  // Diferentes tipos de gafas disponibles
  availableGlasses = [
    { id: 1, name: 'Modelo 1', image: 'assets/img/lente.png' },
    { id: 1, name: 'Modelo 1', image: 'assets/img/lente1.png' },
    { id: 2, name: 'Modelo 2', image: 'assets/img/lente2.png' },
    { id: 3, name: 'Modelo 3', image: 'assets/img/lente3.png' }
  ];
  selectedGlasses = 0;

  async ngOnInit() {
    await this.loadModels();
    this.preloadGlassesImage();
  }

  ngOnDestroy() {
    this.stopCamera();
  }

  async loadModels() {
    try {
      const MODEL_URL = 'models'
      let loaded = false;
      let lastError: any;

        try {
          console.log(`Intentando cargar modelos desde: ${MODEL_URL}`);

          await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
            faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL)
          ]);

          this.isModelLoaded = true;
          loaded = true;
          console.log(`✅ Modelos de detección facial cargados exitosamente desde: ${MODEL_URL}`);
        } catch (err) {
          lastError = err;
          console.warn(`❌ No se pudieron cargar desde ${MODEL_URL}:`, err);
        }

      if (!loaded) {
        throw lastError;
      }
    } catch (error) {
      console.error('Error al cargar los modelos:', error);
      const message = `No se pudieron cargar los modelos de detección facial.

Posibles soluciones:
1. Asegúrate de que el servidor esté corriendo (npm start)
2. Verifica que los archivos estén en la carpeta public/models/
3. Reinicia el servidor después de modificar angular.json
4. Abre la consola del navegador (F12) para ver más detalles

Archivos necesarios en public/models/:
- tiny_face_detector_model-weights_manifest.json
- tiny_face_detector_model-shard1
- face_landmark_68_model-weights_manifest.json
- face_landmark_68_model-shard1
- face_recognition_model-weights_manifest.json
- face_recognition_model-shard1
- face_recognition_model-shard2`;

      alert(message);
    }
  }

  preloadGlassesImage() {
    this.glassesImage = new Image();
    this.glassesImage.src = this.availableGlasses[this.selectedGlasses].image;
  }

  async toggleCamera() {
    if (this.isCameraActive) {
      this.stopCamera();
    } else {
      await this.startCamera();
    }
  }

  async startCamera() {
    if (!this.isModelLoaded) {
      alert('Los modelos aún no se han cargado. Por favor espera un momento.');
      return;
    }

    try {
      const video = this.videoRef.nativeElement;
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: 640,
          height: 480,
          facingMode: 'user'
        }
      });

      video.srcObject = this.stream;

      video.addEventListener('loadedmetadata', () => {
        const canvas = this.canvasRef.nativeElement;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      });

      await video.play();
      this.isCameraActive = true;
      this.startDetection();

    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
      alert('No se pudo acceder a la cámara. Por favor, verifica los permisos.');
    }
  }

  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }

    if (this.detectionInterval) {
      clearInterval(this.detectionInterval);
      this.detectionInterval = null;
    }

    const video = this.videoRef.nativeElement;
    video.srcObject = null;

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    this.isCameraActive = false;
  }

  startDetection() {
    const video = this.videoRef.nativeElement;
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    this.detectionInterval = setInterval(async () => {
      if (!this.isCameraActive) return;

      const detections = await faceapi
        .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (detections) {
        this.drawGlasses(detections, ctx);
      }
    }, 100); // Detectar cada 100ms
  }

  drawGlasses(detections: faceapi.WithFaceLandmarks<{ detection: faceapi.FaceDetection }>, ctx: CanvasRenderingContext2D) {
    const landmarks = detections.landmarks;

    // Obtener puntos clave de los ojos
    const leftEye = landmarks.getLeftEye();
    const rightEye = landmarks.getRightEye();

    // Calcular el centro de cada ojo
    const leftEyeCenter = this.getCenter(leftEye);
    const rightEyeCenter = this.getCenter(rightEye);

    // Calcular la distancia entre ojos
    const eyeDistance = Math.sqrt(
      Math.pow(rightEyeCenter.x - leftEyeCenter.x, 2) +
      Math.pow(rightEyeCenter.y - leftEyeCenter.y, 2)
    );

    // Calcular el ángulo de rotación
    const angle = Math.atan2(
      rightEyeCenter.y - leftEyeCenter.y,
      rightEyeCenter.x - leftEyeCenter.x
    );

    // Dimensiones de las gafas basadas en la distancia entre ojos
    const glassesWidth = eyeDistance * 3.0;
    const glassesHeight = glassesWidth * 0.7;

    // Posición central entre los ojos
    const centerX = (leftEyeCenter.x + rightEyeCenter.x) / 2;
    const centerY = (leftEyeCenter.y + rightEyeCenter.y) / 2 + eyeDistance * 0;

    if (this.glassesImage && this.glassesImage.complete) {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      ctx.drawImage(
        this.glassesImage,
        -glassesWidth / 2,
        -glassesHeight / 2,
        glassesWidth,
        glassesHeight
      );
      ctx.restore();
    }
  }

  getCenter(points: faceapi.Point[]): { x: number, y: number } {
    const sum = points.reduce(
      (acc, point) => ({
        x: acc.x + point.x,
        y: acc.y + point.y
      }),
      { x: 0, y: 0 }
    );

    return {
      x: sum.x / points.length,
      y: sum.y / points.length
    };
  }

  changeGlasses(index: number) {
    this.selectedGlasses = index;
    this.glassesImage = new Image();
    this.glassesImage.src = this.availableGlasses[index].image;
  }

  capturePhoto() {
    const video = this.videoRef.nativeElement;
    const canvas = this.canvasRef.nativeElement;
    const captureCanvas = document.createElement('canvas');
    const ctx = captureCanvas.getContext('2d');

    if (!ctx) return;

    captureCanvas.width = video.videoWidth;
    captureCanvas.height = video.videoHeight;

    // Dibujar el video
    ctx.drawImage(video, 0, 0);

    // Dibujar las gafas encima
    ctx.drawImage(canvas, 0, 0);

    // Descargar la imagen
    captureCanvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `prueba-gafas-${Date.now()}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }
    });
  }
}
