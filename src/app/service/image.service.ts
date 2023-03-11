/*import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";
  constructor(private storage: Storage) { }

  public uploadImg($event: any,  name: string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `images/`+ name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))
  }

  getImages(){
    const imagesRef = ref(this.storage, `images`)
    list(imagesRef)
    .then(async response => {
      for(let item of response.items)
      this.url = await getDownloadURL(item);
      console.log("La url es: " + this.url)
    }
      )
      .catch(error => console.log(error))
  }
}
*/
import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";
  imageLoaded = new Subject<string>();

  constructor(private storage: Storage) { }

  public uploadImg($event: any,  name: string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `images/`+ name);
    uploadBytes(imgRef, file)
      .then(() => this.getImages(name)) // Pasa el nombre de la imagen a getImages()
      .catch(error => console.log(error))
  }


  getImages(name: string){
    const imagesRef = ref(this.storage, `images`);
    list(imagesRef)
      .then(async response => {
        for(let item of response.items) {
          if (item.name === name) { // Busca la imagen con el nombre correspondiente
            this.url = await getDownloadURL(item);
            console.log("La url es: " + this.url);
            this.imageLoaded.next(this.url);
            return;
          }
        }
      })
      .catch(error => console.log(error))
  }
}
