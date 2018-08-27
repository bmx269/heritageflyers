import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.tagName = 'section';
    this.classNames = ['page-section'];
    this.elementId = this.sectionId;
  }
});
