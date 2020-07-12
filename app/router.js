import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home',{path:'/'});
  this.route('posts');
  this.route('about');
  this.route('contact',function() {
    this.route('khyatip');
    this.route('khyatie');
    this.route('deepeshp');
    this.route('deepeshe');
    this.route('divijp');
    this.route('divije');
    this.route('suchitae');
    this.route('suchitap');
  });
});

export default Router;
