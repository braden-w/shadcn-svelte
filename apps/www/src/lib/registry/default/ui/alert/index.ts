import { cva, type VariantProps } from "class-variance-authority";

import Root from "./Alert.svelte";
import Description from "./AlertDescription.svelte";
import Title from "./AlertTitle.svelte";

export const alertVariants = cva(
	"relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11",
	{
		variants: {
			variant: {
				default: "bg-background text-foreground",
				destructive:
					"text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive"
			}
		},
		defaultVariants: {
			variant: "default"
		}
	}
);

export type Variant = VariantProps<typeof alertVariants>["variant"];
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export {
	Root,
	Description,
	Title,
	//
	Root as Alert,
	Description as AlertDescription,
	Title as AlertTitle
};