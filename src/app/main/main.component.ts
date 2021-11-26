import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { User } from '../interfaces/userCompleted.interface';
import { AnimeService } from '../services/anime.service';
import Swal from 'sweetalert2';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [`
    *{
      text-align: center;
    }
  `]
})
export class MainComponent  {
  
  @ViewChild('user_search') user_search!: ElementRef<HTMLInputElement>;

  @Output() onUserEmitter: EventEmitter<User> = new EventEmitter();

  constructor( private animeService: AnimeService ) { }

  isLoading: boolean = false;
  userSearched!: User

  search(){

    const username = this.user_search.nativeElement.value.trim();

    // Si devuelve falso, significa que el valor introducido no es válido y no hago la petición.
    if (!this.inputValidators( username )) return;

    // Petición a la API
    this.isLoading = true;
    this.animeService.searchUser( username ).subscribe( res =>{
      this.userSearched = res;
      this.onUserEmitter.emit(this.userSearched);
      console.log( this.userSearched.anime );
      this.isLoading = false;
    });
  }
  
  inputValidators( text: string ){

    let errorText: string = '';
    
    if ( !text ) {
      // Verificar si la cadena está vacía. 
      document.getElementsByTagName('input')[0].value = '';
      errorText = 'Debes escribir el nombre de un usuario.';
      
    } else if ( text.length < 2 || text.length > 16 ) {
      // Verificar longitud del texto.
      errorText = 'El usuario debe tener entre 2 y 16 caracteres';

    } else return true;

    Swal.fire({
      title: 'Error :(',
      text: errorText,
      icon: 'error',
      confirmButtonText: 'Ok uwu'
    });

    return false;
  }

}
