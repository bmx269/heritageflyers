import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mission', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mission');
    assert.ok(route);
  });
});
