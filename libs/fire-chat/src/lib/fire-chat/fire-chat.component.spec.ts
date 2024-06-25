import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FireChatComponent } from './fire-chat.component';

describe('FireChatComponent', () => {
  let component: FireChatComponent;
  let fixture: ComponentFixture<FireChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireChatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FireChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
