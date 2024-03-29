import EmberRouter from '@ember/routing/router';
import { scheduleOnce } from '@ember/runloop';
import { inject } from '@ember/service';
import RouterScroll from 'ember-router-scroll';
import config from './config/environment';

const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  headData: inject(),
  rootURL: config.rootURL,
  metrics: inject(),

  // setTitle(title) {
  //   this.get('headData').set('title', title);
  // },

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      // const page = this.url;
      // const title = this.getWithDefault('currentRouteName', 'unknown');

      // this.metrics.trackPage({ page, title });
      if (typeof FastBoot === 'undefined') {
        const page = this.url;
        const title = this.getWithDefault('currentRouteName', 'unknown');
        this.metrics.trackPage({ page, title });
      }
    });
  }
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('notfound', { path: '/*path' });
  this.route('gallery');
  this.route('mission');
  this.route('help-us');
  this.route('testimonials');
});

export default Router;
