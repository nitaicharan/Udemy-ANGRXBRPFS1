import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from 'src/app/auth/auth.module';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { CreateArticleModule } from './create-article/create-article.module';
import { EditArticleModule } from './edit-article/edit-article.module';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { TopbarModule } from './shared/module/topbar/topbar.module';
import { AuthInterceptor } from './shared/service/authinterceptor.service';
import { TagFeedModule } from './tag-feed/tag-feed.module';
import { YourFeedModule } from './your-feed/your-feed.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer, }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TopbarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    EditArticleModule,
    CreateArticleModule,
    ArticleModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
