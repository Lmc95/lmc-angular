import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenPerfilService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImg($event: any,  name: string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagesPerfil/`+ name);
    uploadBytes(imgRef, file)
      .then(() => this.getImages())
      .catch(error => console.log(error))
  }

  getImages(){
    const imagesRef = ref(this.storage, `imagesPerfil`);
    list(imagesRef)
      .then(async response => {
        for(let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log("La url es: " + this.url);
        }
      })
      .catch(error => console.log(error))
  }
}
