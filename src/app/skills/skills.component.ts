import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: any = {
    technologies: [
      { name: 'JavaScript', percent: 90, remark: 'excellent' },
      { name: 'Angular', percent: 90, remark: 'excellent' },
      { name: 'React', percent: 70, remark: 'very-good' },
      { name: 'Node.js', percent: 70, remark: 'very-good' },
      { name: 'HTML, CSS, Bootstrap, Tailwind CSS', percent: 90, remark: 'excellent' },
    ],
    tools: [
      { name: 'Git', percent: 90, remark: 'excellent' },
      { name: 'Jira, Trello, Kanban Board', percent: 90, remark: 'excellent' },
      { name: 'MongoDB, SQL Server', percent: 90, remark: 'excellent' },
      { name: 'GoogleMap, Leaflet Map, HighChart', percent: 70, remark: 'very-good' },
      { name: 'Sentry.io, Stripe.io, Socket.io, OAuth', percent: 90, remark: 'excellent' },
    ],
    methodologies: [
      { name: 'Scrum', percent: 70, remark: 'very-good' },
      { name: 'SAAS', percent: 90, remark: 'excellent' },
      { name: 'Disign Thinking', percent: 70, remark: 'good' },
      { name: 'TDD', percent: 90, remark: 'excellent' },
      { name: 'DevOps', percent: 50, remark: 'average' },
    ],
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {}
}
