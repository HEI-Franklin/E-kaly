import {
  ref, getDownloadURL, uploadBytesResumable
} from 'firebase/storage';
import { storage } from '../../conf';

export const uploadFiles = (setImageUrl: (url: string) => void, file: Blob | File) => {
  if (!file) return null;
  const storageFile = ref(storage, `images/${(file as File).name}`);
  const uploadTask = uploadBytesResumable(storageFile, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
    },
    (error) => console.log(error),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => setImageUrl(downloadURL))
    }
  );
}
