import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | testimonials', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:testimonials');
    assert.ok(route);
  });
});
