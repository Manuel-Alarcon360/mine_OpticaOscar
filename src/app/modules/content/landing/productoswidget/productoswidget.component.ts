import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-productoswidget',
  imports: [],
  templateUrl: './productoswidget.component.html',
  styleUrl: './productoswidget.component.scss'
})
export class ProductoswidgetComponent {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>

  camaraActiva = false
  private stream: MediaStream | null = null

  async inicioCamera() {
      const videoEl = this.video.nativeElement
      this.stream = await navigator.mediaDevices.getUserMedia({ video: true })
      videoEl.srcObject = this.stream
      this.camaraActiva = true
  }
  cancelarCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop())
      this.stream = null
    }
    const videoEl = this.video.nativeElement
    videoEl.srcObject = null
    this.camaraActiva = false
  }
}