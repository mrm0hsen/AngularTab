import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { APIKey, MapService, MapSetting } from 'src/app/Services/map-service.service';

@Component({
  selector: 'app-map-base',
  templateUrl: './map-base.component.html',
  styleUrls: ['./map-base.component.css']
})
export class MapBaseComponent implements OnInit {
  @Input()
  center: MapBaseLocation;

  @Output()
  selectedLocation = new EventEmitter<MapBaseLocation>();

  mapTypes: MapSetting[];
  apiKey: APIKey = {};
  mapMarkers = [];

  constructor (private service: MapService) {
    this.mapTypes = service.getMapTypes();
    this.apiKey.bing = 'AuemIckpLnrIlYi1J29vVeDzyqSEXHNe12FapFI1WfhMu83DlnpdUtLCOBg7n3Pf';

  }

  ngOnInit(): void {
    if(this.center) {      
      this.mapMarkers.push({ location: `${this.center.latitude}, ${this.center.longitude}` });
    } else {
      this.center = new MapBaseLocation("35.70012933641762", "51.33836802832265");
      this.mapMarkers.push({ location: "35.70012933641762, 51.33836802832265" });
    }
  }

  addMarker (e:any) {
    this.mapMarkers.pop();
    this.mapMarkers.push({ location: e.location });
    let selectedLocation = new MapBaseLocation(e.location.lat, e.location.lng);
    this.selectedLocation.emit(selectedLocation);
  };

}

export class MapBaseLocation {
  constructor(public latitude: string, public longitude: string) {}
}
