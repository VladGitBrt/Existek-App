import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { IMusic } from '@existek/api-interfaces';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'existek-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  musicArr: IMusic[] = [];
  fullArr: IMusic[] = [];
  genreArr: string[] = [];
  albumArr: string[] = [];
  authorArr: string[] = [];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  searchFormControl = new FormControl('');
  selectFormControl = new FormControl('');
  sliderFormControl = new FormControl(0);
  constructor(private musicService: MusicDataService) {}
  ngOnInit(): void {
    console.log('ng on init');
    this.musicService.getMusic().subscribe((data) => {
      this.musicArr = data;
      this.fullArr = data;
      this.musicArr = this.fullArr.filter((item) => item.id < 6);
      const genre: string[] = [];
      const author: string[] = [];
      const album: string[] = [];
      data.forEach((item) => {
        genre.push(item.genre);
        author.push(item.author);
        album.push(item.album);
      });
      this.genreArr = [...new Set(genre)];
      this.albumArr = [...new Set(album)];
      this.authorArr = [...new Set(author)];
    });
  }
  ngAfterViewInit(): void {
    this.paginator.page.subscribe((page) => {
      if (page.pageIndex == 1) {
        this.musicArr = this.fullArr.filter((item) => item.id >= 6);
        console.log(this.musicArr);
        console.log(this.fullArr);
      } else if (page.pageIndex == 0) {
        this.musicArr = this.fullArr.filter((item) => item.id < 6);
      }
    });
  }
  sliderConfig(value: number): string | number {
    return value;
  }
  sliderChange(value: number) {
    this.musicArr = this.fullArr;
    this.musicArr = this.fullArr.filter((item) => item.year == value);
  }
  //live search by input
  searchResult(value: string) {
    console.log(value);
    if (value == '') {
      this.musicArr = this.fullArr.filter((item) => item.id < 6);
      console.log(this.musicArr);
    } else {
      this.fullArr.forEach((item) => {
        if (item.title.toLowerCase() == value.toLowerCase()) {
          this.musicArr = [];
          this.musicArr.push(item);
        }
      });
      console.log(this.musicArr);
    }
  }
  optionGenreChange(value: any) {
    if (value == 'All') {
      this.musicArr = this.fullArr.filter((item) => item.id < 6);
    } else {
      this.musicArr = this.fullArr;
      this.musicArr = this.musicArr.filter((item) => item.genre == value);
    }
  }
  optionAlbumChange(value: any) {
    if (value == 'All') {
      this.musicArr = this.fullArr.filter((item) => item.id < 6);
    } else {
      this.musicArr = this.fullArr;
      this.musicArr = this.musicArr.filter((item) => item.album == value);
    }
  }
  optionAuthorChange(value: any) {
    if (value == 'All') {
      this.musicArr = this.fullArr.filter((item) => item.id < 6);
    } else {
      this.musicArr = this.fullArr;
      this.musicArr = this.musicArr.filter((item) => item.author == value);
    }
  }
}
