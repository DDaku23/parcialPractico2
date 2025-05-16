import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  @Input() animeDetail!: Anime;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');

  }
}
