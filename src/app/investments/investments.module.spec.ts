import { InvestmentsModule } from './investments.module';

describe('InvestmentsModule', () => {
  let investmentsModule: InvestmentsModule;

  beforeEach(() => {
    investmentsModule = new InvestmentsModule();
  });

  it('should create an instance', () => {
    expect(investmentsModule).toBeTruthy();
  });
});
