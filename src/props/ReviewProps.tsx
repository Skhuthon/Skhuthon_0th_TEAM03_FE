export interface ReviewProps {
    id: number;
    themeName: string;
    isSuccess: boolean;
    numberOfPeople: number;
    numberOfHintsUsed: number;
    remainingTime: number;
    totalThemeTime: number;
    content: string;
}
