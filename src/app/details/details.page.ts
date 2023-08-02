import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  @Input() day: number;
  data = '';

  constructor(private modalCtrl: ModalController, private contentService: ContentService) { }

  ngOnInit() {
    this.data = this.contentService.getDayContent(this.day);
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
