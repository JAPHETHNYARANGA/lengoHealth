import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/interfaces/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private apiUrl = 'http://127.0.0.1:8000/api/activities';

  constructor(private http: HttpClient) { }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.apiUrl);
  }

  createActivity(activityData: FormData): Observable<Activity> {
    return this.http.post<Activity>(this.apiUrl, activityData);
  }

  updateActivity(id: number, activityData: FormData): Observable<Activity> {
    return this.http.post<Activity>(`${this.apiUrl}/${id}`, activityData);
  }

  deleteActivity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
