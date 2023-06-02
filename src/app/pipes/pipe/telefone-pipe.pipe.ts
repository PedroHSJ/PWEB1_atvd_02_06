import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefonePipe'
})

export class TelefonePipePipe implements PipeTransform {

  transform(value: string): string {
    // Remove todos os caracteres que não sejam dígitos
    const cleanedValue = value.toString().replace(/\D/g, '');

    // Verifica se o número possui 10 ou 11 dígitos
    const isEightDigits = cleanedValue.length === 8;
    const isTenDigits = cleanedValue.length === 10;
    const isElevenDigits = cleanedValue.length === 11;

    // Formata o número do telefone
    if(isEightDigits){
      return cleanedValue.replace(/(\d{4})(\d{4})/, '$1-$2');
    }
    if (isTenDigits) {
      return cleanedValue.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } 
    if (isElevenDigits) {
      return cleanedValue.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
    } 
    
    return value; // Retorna o valor original se não for um número válido
    
  }

}
