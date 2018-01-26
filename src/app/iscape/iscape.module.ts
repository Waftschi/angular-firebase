import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';


import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule, FirebaseAppConfig, FirebaseAppConfigToken, FirebaseAppName } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthGuard } from './shared/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { IscapeComponent } from './iscape.component';
import { IscapeRoutingModule } from './iscape-routing.module';
import { ItemsModule } from './items/items.module';
import { LocationModule } from './location/location.module';
import { MaterialModule } from './material/material.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ProjectModule } from './project/project.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { skillReducer } from './state/reducers/skill.reducer';
import { SkillEffects } from './state/effects/skill.effects';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';


export function instrumentOptions() {
    return {
        monitor: useLogMonitor({ visible: true, position: 'right' }),
        name: 'IScape No Plan'

    };
}

@NgModule({
    declarations: [IscapeComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HomeModule,
        IscapeRoutingModule,
        ItemsModule,
        LocationModule,
        MaterialModule,
        AngularFireAuthModule,
        ProjectModule,
        ReactiveFormsModule,
        SharedModule,
        SkillModule,
        UserModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        StoreModule.forRoot({ skill: skillReducer }),
        EffectsModule.forRoot([SkillEffects]),
        StoreDevtoolsModule.instrument(instrumentOptions),
        StoreLogMonitorModule

        // AngularFireModule.initializeApp(environment.firebase),
    ],
    providers: [AuthGuard],
    bootstrap: [],
    exports: [
        IscapeComponent,
    ]
})
export class IscapeModule {
    static forRoot(config?: FirebaseAppConfig): ModuleWithProviders {
        return {
            ngModule: IscapeModule,
            providers: [AngularFireModule,
                { provide: FirebaseAppConfigToken, useValue: config },
                { provide: FirebaseAppName, useValue: '' },
            ]
        };
    }
}

