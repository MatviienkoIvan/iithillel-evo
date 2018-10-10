import { UploadRoutingModule } from './upload-routing.module';

describe('UploadRoutingModule', () => {
  let uploadRoutingModule: UploadRoutingModule;

  beforeEach(() => {
    uploadRoutingModule = new UploadRoutingModule();
  });

  it('should create an instance', () => {
    expect(uploadRoutingModule).toBeTruthy();
  });
});
