//activity
import api from '../service/api';

interface ActivityDTO {
  title: string;
  description: string;
  status: string;
  deadline: Date;
  createdAt: Date;
  updateAt: Date;
}

export const newActivity = (activity: ActivityDTO, objectiveId: number) => {
  return api.post(`/activity/new_activity/${objectiveId}`, {activity});
}

export const updateActivity = (activity: ActivityDTO, idActivity: number) => {
  return api.post(`/activity/update_activity/${idActivity}`, {activity});
}

export const activities = (objectiveId: number) => {
  return api.get(`/activity/all_activities/${objectiveId}`);
}