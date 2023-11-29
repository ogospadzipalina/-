// app.module.shared.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';
import { CommonModule } from '@angular/common'; // Import CommonModule

@NgModule({
  imports: [FormsModule, CommonModule], // Add CommonModule to the imports array
  declarations: [CampaignFormComponent],
  exports: [FormsModule, CommonModule, CampaignFormComponent], // Include CommonModule in the exports array
})
export class SharedModule { }
