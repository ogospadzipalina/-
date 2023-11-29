// app.component.ts
import { Component } from '@angular/core';
import { CampaignService } from './campaign.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  campaigns: any[] = this.campaignService.getCampaigns();

  constructor(private campaignService: CampaignService) {}

  editCampaign(campaign: any) {
    this.campaignService.updateCampaign(campaign);
  }

  deleteCampaign(campaignId: number) {
    this.campaignService.deleteCampaign(campaignId);
  }
}
