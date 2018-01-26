import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
// import { EffectsRunner, EffectsTestingModule } from '@ngrx/effects/testing';
 import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SkillEffects } from './skill.effects';
// import { SkillService } from '../../services/skill.service';
import { Observable } from 'rxjs/Observable';
import { SkillService } from '../../skill/skill.service';
import { EffectsRunner } from '@ngrx/effects/src/effects_runner';

describe('SkillEffects', () => {
  let runner, skillEffects, skillService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      // EffectsTestingModule
    ],
    providers: [
      SkillEffects,
      {
        provide: SkillService,
        useValue: jasmine.createSpyObj('skillService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    skillEffects = TestBed.get(SkillEffects);
    skillService = TestBed.get(SkillService);
  });

  describe('skill$', () => {

    it('should return a LOAD_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_FAIL action, on error', function () {

    });

  });

});
