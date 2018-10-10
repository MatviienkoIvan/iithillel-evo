import { WikiRoutingModule } from './wiki-routing.module';

describe('WikiRoutingModule', () => {
  let wikiRoutingModule: WikiRoutingModule;

  beforeEach(() => {
    wikiRoutingModule = new WikiRoutingModule();
  });

  it('should create an instance', () => {
    expect(wikiRoutingModule).toBeTruthy();
  });
});
