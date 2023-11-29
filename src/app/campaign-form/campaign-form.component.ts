// campaign-form.component.ts
import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})
export class CampaignFormComponent implements OnInit {
  campaign: any = {};

  towns: string[] = ['Town A', 'Town B', 'Town C'];
  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private campaignService: CampaignService) {}

  ngOnInit() {
    // Retrieve the current campaign from the service when the component is initialized
    const currentCampaign = this.campaignService.getCurrentCampaign();
    this.campaign = currentCampaign || {};
    console.log('Campaign:', this.campaign);
  }

  editCampaign() {
    if (this.campaign.id) {
      this.campaignService.updateCampaign(this.campaign);
      this.resetForm();

      this.isEditing = true;
    }

    console.log('Editing campaign:', this.campaign);
  }

  cancelEdit() {
    this.isEditing = false;
  }

  deleteCampaign(campaignId: number) {
    if (confirm('Are you sure you want to delete this campaign?')) {
      this.campaignService.deleteCampaign(campaignId);
      // Optionally, you might want to refresh the campaign list or perform other actions after deleting
    }

    console.log('Editing campaign:', this.campaign);
  }

  submitForm() {
    if (this.campaign.id) {
      this.campaignService.updateCampaign(this.campaign);
    } else {
      this.campaignService.addCampaign(this.campaign);
    }
    this.submitted = true;
  }

  resetForm() {
    this.campaign = {};
    this.submitted = false;
  }
}
