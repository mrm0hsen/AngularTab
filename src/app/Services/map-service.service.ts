import { Injectable } from '@angular/core';

export class MapSetting {
  key: string="";

  name: string ="";
}

export type APIKey = {
  bing?: string;

  google?: string;

  googleStatic?: string;
};

const mapTypes: MapSetting[] = [{
  key: 'roadmap',
  name: 'Road Map',
}, {
  key: 'satellite',
  name: 'Satellite (Photographic) Map',
}, {
  key: 'hybrid',
  name: 'Hybrid Map',
}];

@Injectable(
  {
    providedIn: 'root'
  }
)
export class MapService {
  getMapTypes(): MapSetting[] {
    return mapTypes;
  }
}
