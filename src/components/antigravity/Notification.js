// src/components/antigravity/Notification.js
import { toast } from 'sonner';

export const Notification = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  info: (message) => toast.info(message),
  warning: (message) => toast.warning(message),
  show: (message) => toast(message),
};
