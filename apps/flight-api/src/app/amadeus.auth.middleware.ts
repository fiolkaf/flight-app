import fetch from 'cross-fetch';
import { NestMiddleware } from '@nestjs/common';
import { AmadeusApiUrl, ClientId, ClientSecret } from './app.conf';

type AmadeusAuthResponse = {
  client_id: string;
  token_type: string;
  access_token: string;
  expires_in: number;
};

export class AmadeusAuthMiddleware implements NestMiddleware {
  private amadeusAuthResponse: AmadeusAuthResponse = null;

  constructor() {
    this.getAmadeusAuthResponse();
  }

  async getAmadeusAuthResponse() {
    const res = await fetch(`${AmadeusApiUrl}/security/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: `grant_type=client_credentials&client_id=${ClientId}&client_secret=${ClientSecret}`
    });

    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }

    this.amadeusAuthResponse = await res.json();
    console.log('this.amadeusAuthResponse.expires_in', this.amadeusAuthResponse.access_token, this.amadeusAuthResponse.expires_in);

    setTimeout(() => this.getAmadeusAuthResponse(), this.amadeusAuthResponse.expires_in * 1000 / 2);
  }

  async use(req, _res, next: () => void) {
    if (this.amadeusAuthResponse === null) {
      throw new Error('No Amadeus Authorization');
    }

    req.headers['Authorization'] = `Bearer ${this.amadeusAuthResponse.access_token}`;
    next();
  }
}
