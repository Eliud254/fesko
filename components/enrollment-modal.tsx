"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Check, Loader2, PartyPopper } from "lucide-react"
import { cn } from "@/lib/utils"

interface EnrollmentModalProps {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
}

export function EnrollmentModal({ isOpen, onOpenChange }: EnrollmentModalProps) {
    const [step, setStep] = useState<"form" | "success">("form")
    const [isLoading, setIsLoading] = useState(false)
    const [date, setDate] = useState<Date>()

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        transmission: "b1_auto", // Default to most popular
    })

    // Simulate Submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsLoading(false)
        setStep("success")
    }

    const handleClose = () => {
        onOpenChange(false)
        // Reset state after transition
        setTimeout(() => {
            setStep("form")
            setIsLoading(false)
            setFormData({ name: "", email: "", phone: "", course: "", transmission: "b1_auto" })
        }, 300)
    }

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="w-[95vw] sm:max-w-[480px] p-0 overflow-hidden border-none bg-transparent shadow-2xl max-h-[90vh] flex flex-col">
                <div className="bg-white/90 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-lg shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] overflow-y-auto custom-scrollbar">

                    {step === "form" ? (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <DialogHeader className="mb-6 space-y-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-1 w-8 bg-primary rounded-full" />
                                    <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">Begin Your Journey</span>
                                </div>
                                <DialogTitle className="text-3xl font-black text-gray-900 tracking-tighter">
                                    Secure Your <span className="text-primary italic">Seat.</span>
                                </DialogTitle>
                                <DialogDescription className="text-base font-medium text-gray-500">
                                    Join Kenya's elite driving academy. Spots are limited for our upcoming intake.
                                </DialogDescription>
                            </DialogHeader>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="space-y-1.5 transition-all duration-300 group focus-within:translate-x-1">
                                            <Label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wider group-focus-within:text-primary transition-colors">Full Name</Label>
                                            <Input
                                                id="name"
                                                required
                                                className="h-12 border-gray-200 bg-white/50 focus:bg-white transition-all font-medium text-gray-900 rounded-xl"
                                                placeholder="e.g. Fesco Driver"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-1.5 transition-all duration-300 group focus-within:translate-x-1">
                                            <Label htmlFor="phone" className="text-xs font-bold text-gray-400 uppercase tracking-wider group-focus-within:text-primary transition-colors">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                required
                                                className="h-12 border-gray-200 bg-white/50 focus:bg-white transition-all font-medium text-gray-900 rounded-xl"
                                                placeholder="+254 7..."
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5 transition-all duration-300 group focus-within:translate-x-1">
                                        <Label className="text-xs font-bold text-gray-400 uppercase tracking-wider group-focus-within:text-primary transition-colors">Preferred Course</Label>
                                        <Select onValueChange={(val) => setFormData({ ...formData, course: val })}>
                                            <SelectTrigger className="h-12 border-gray-200 bg-white/50 focus:bg-white transition-all font-medium text-gray-900 rounded-xl">
                                                <SelectValue placeholder="Select a program" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="refresher" className="font-medium">Refresher Course (Elite)</SelectItem>
                                                <SelectItem value="beginner" className="font-medium">Beginner (B1/B2)</SelectItem>
                                                <SelectItem value="advanced" className="font-medium">Advanced Defensive</SelectItem>
                                                <SelectItem value="parts" className="font-medium">Parts & Mechanics</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <Label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Transmission</Label>
                                            <Select defaultValue="b1_auto" onValueChange={(val) => setFormData({ ...formData, transmission: val })}>
                                                <SelectTrigger className="h-12 border-gray-200 bg-white/50 focus:bg-white transition-all font-medium text-gray-900 rounded-xl">
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="b1_auto">Automatic</SelectItem>
                                                    <SelectItem value="b2_manual">Manual</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Start Date</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full h-12 justify-start text-left font-medium rounded-xl border-gray-200 bg-white/50 hover:bg-white",
                                                            !date && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0 rounded-xl shadow-xl" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className="w-full h-14 text-base font-bold bg-gray-900 hover:bg-gray-800 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-2px]"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center gap-2">
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                Processing...
                                            </span>
                                        ) : (
                                            "Confirm Enrollment Request"
                                        )}
                                    </Button>
                                    <p className="text-center text-[10px] text-gray-400 font-medium mt-3">
                                        No payment required now. We'll contact you to finalize.
                                    </p>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center py-10 animate-in zoom-in fade-in duration-500">
                            <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg animate-bounce-slow">
                                <PartyPopper className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-2">You're In!</h3>
                            <p className="text-gray-500 font-medium max-w-[260px] mx-auto mb-8">
                                Welcome to the elite circle. Our admissions team will reach out to you shortly at <span className="text-gray-900 font-bold">{formData.phone}</span>.
                            </p>
                            <Button
                                onClick={handleClose}
                                className="h-12 px-8 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold"
                            >
                                Return to Site
                            </Button>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
