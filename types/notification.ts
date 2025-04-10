export type Notification = {
    id: string;
    user_id: string;
    title: string;
    message: string;
    is_read: boolean;
    notification_type: string;
    related_user_id: string | null;
    created_at: string;
};
