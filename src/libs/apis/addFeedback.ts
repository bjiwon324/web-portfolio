import { supabase } from "../supabase/client";
import { FeedbackFormValues } from "../types";

export const addFeedback = async (data: FeedbackFormValues) => {
  const { data: result, error } = await supabase
    .from("feedback")
    .insert([data])
    .select();

  if (error) throw error;
  return result;
};
