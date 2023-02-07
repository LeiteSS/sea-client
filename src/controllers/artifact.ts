//artifact
import api from '../service/api';

interface ArtifactDTO {
  title: string;
  body: string;
  createdAt: Date;
  updateAt: Date;
}

export const newArtifact = (artifact: ArtifactDTO, activityId: number) => {
  return api.post(`/artifact/new_artifact/${activityId}`, {artifact});
}

export const updateArtifact = (artifact: ArtifactDTO, idArtifact: number) => {
  return api.post(`/artifact/update_artifact/${idArtifact}`, {artifact});
}

export const artifacts = (activityId: number) => {
  return api.get(`/artifact/all_artifacts/${activityId}`);
}