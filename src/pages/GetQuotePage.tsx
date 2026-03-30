import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Container from "@/components/layout/Container";
import { SITE_NAME, PHONE_NUMBER } from "@/lib/constants";
import { eventTypes } from "@/data/events";
import { CheckCircle, ChevronLeft } from "lucide-react";

const steps = ["Event Type", "Event Details", "Coverage", "Contact", "Review"];

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email").max(255),
  phone: z.string().min(10, "Phone must be at least 10 digits").max(20),
});

const GetQuotePage = () => {
};

export default GetQuotePage;
