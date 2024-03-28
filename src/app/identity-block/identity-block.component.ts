import { Component, Input } from '@angular/core';
import { IdBlock } from '../models/id-block.model';


@Component({
  selector: 'app-identity-block',
  standalone: true,
  imports: [],
  templateUrl: './identity-block.component.html',
  styleUrl: './identity-block.component.scss'
})
export class IdentityBlockComponent {
  @Input() dataBlock!: IdBlock;
}
