import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {IOMTakeHomePayComponent} from './iom-take-home-pay.component';

describe('IOMTakeHomePayComponent', () => {
  let component: IOMTakeHomePayComponent;
  let fixture: ComponentFixture<IOMTakeHomePayComponent>;

  const setFormValues = (values: Partial<{
    gross_income: number;
    pension_contribution_percent: number;
    is_couple_tax: boolean;
  }>) => {
    const formModel = (component as any).form_model;
    const currentValue = formModel();

    formModel.set({
      gross_income: values.gross_income ?? currentValue.gross_income,
      pension_contribution_percent: values.pension_contribution_percent ?? currentValue.pension_contribution_percent,
      is_couple_tax: values.is_couple_tax ?? currentValue.is_couple_tax
    });
  };

  const expectCloseTo = (actual: number, expected: number, precision = 2) => {
    expect(actual).toBeCloseTo(expected, precision);
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IOMTakeHomePayComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IOMTakeHomePayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calculates single taxpayer take-home pay for £40,000 gross income', async () => {
    setFormValues({
      gross_income: 40000,
      pension_contribution_percent: 0,
      is_couple_tax: false
    });

    fixture.detectChanges();
    await fixture.whenStable();

    expectCloseTo(component.personal_allowance(), 17000);
    expectCloseTo(component.taxable_income(), 23000);
    expectCloseTo(component.income_tax(), 4115);
    expectCloseTo(component.national_insurance(), 3393.28);
    expectCloseTo(component.take_home_pay(), 32491.72);
    expectCloseTo(component.monthly_take_home_pay(), 2707.6433333333334, 6);
  });

  it('calculates single taxpayer take-home pay for £100,000 gross income', async () => {
    setFormValues({
      gross_income: 100000,
      pension_contribution_percent: 0,
      is_couple_tax: false
    });

    fixture.detectChanges();
    await fixture.whenStable();

    expectCloseTo((component as any).personal_allowance(), 17000);
    expectCloseTo((component as any).taxable_income(), 83000);
    expectCloseTo((component as any).income_tax(), 16715);
    expectCloseTo((component as any).national_insurance(), 5619.68);
    expectCloseTo((component as any).take_home_pay(), 77665.32);
  });

  it('calculates single taxpayer take-home pay for income >£100,000 gross income', async () => {
    setFormValues({
      gross_income: 120000,
      pension_contribution_percent: 0,
      is_couple_tax: false
    });

    fixture.detectChanges();
    await fixture.whenStable();

    expectCloseTo((component as any).personal_allowance(), 7000);
    expectCloseTo((component as any).taxable_income(), 113000);
    expectCloseTo((component as any).income_tax(), 23015);
    expectCloseTo((component as any).national_insurance(), 5819.68);
    expectCloseTo((component as any).take_home_pay(), 91165.32);
  });

  it('calculates jointly assessed take-home pay for £60,000 gross income', async () => {
    setFormValues({
      gross_income: 60000,
      pension_contribution_percent: 0,
      is_couple_tax: true
    });

    fixture.detectChanges();
    await fixture.whenStable();

    expectCloseTo((component as any).personal_allowance(), 34000);
    expectCloseTo((component as any).taxable_income(), 26000);
    expectCloseTo((component as any).income_tax(), 4030);
    expectCloseTo((component as any).national_insurance(), 5219.68);
    expectCloseTo((component as any).take_home_pay(), 50750.32);
  });

  it('calculates jointly assessed take-home pay for £200,000 gross income', async () => {
    setFormValues({
      gross_income: 200000,
      pension_contribution_percent: 0,
      is_couple_tax: true
    });

    fixture.detectChanges();
    await fixture.whenStable();

    expectCloseTo((component as any).personal_allowance(), 34000);
    expectCloseTo((component as any).taxable_income(), 166000);
    expectCloseTo((component as any).income_tax(), 33430);
    expectCloseTo((component as any).national_insurance(), 6619.68);
    expectCloseTo((component as any).take_home_pay(), 159950.32);
  });

  it('caps pension contribution percentage safely', async () => {
    setFormValues({
      gross_income: 40000,
      pension_contribution_percent: 0,
      is_couple_tax: false
    });

    fixture.detectChanges();
    await fixture.whenStable();

    expectCloseTo((component as any).max_pension_percent(), 100);
  });
});
