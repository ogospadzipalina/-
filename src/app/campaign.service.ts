import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private apiUrl = 'https://ogospadzipalina.netlify.app/.netlify/functions/campaigns';

  private campaigns: any[] = [];
  private currentCampaign: any;

  constructor(private http: HttpClient) {}

  private saveCampaigns() {
    this.http.post(this.apiUrl, this.campaigns).subscribe(
      response => {
        console.log('Campaigns saved successfully:', response);
      },
      error => {
        console.error('Error saving campaigns:', error);
      }
    );
  }

  private loadCampaigns() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      campaigns => {
        this.campaigns = campaigns || [];
      },
      error => {
        console.error('Error loading campaigns:', error);
      }
    );
  }

  addCampaign(campaign: any) {
    this.campaigns.push({ ...campaign, id: this.generateId() });
    this.saveCampaigns();
  }

  updateCampaign(updatedCampaign: any) {
    const index = this.campaigns.findIndex(c => c.id === updatedCampaign.id);
    if (index !== -1) {
      this.campaigns[index] = { ...this.campaigns[index], ...updatedCampaign };
      this.saveCampaigns();
    }

    console.log('Updating campaign:', updatedCampaign);
  }

  deleteCampaign(campaignId: number) {
    this.campaigns = this.campaigns.filter(c => c.id !== campaignId);
    this.saveCampaigns();
  }

  getCampaigns() {
    return this.campaigns;
  }

  setCurrentCampaign(campaign: any) {
    this.currentCampaign = { ...campaign };
  }

  getCurrentCampaign() {
    return this.currentCampaign;
  }

  clearCurrentCampaign() {
    this.currentCampaign = null;
  }

  private generateId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
