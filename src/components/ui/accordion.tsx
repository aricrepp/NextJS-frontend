"use client"

import * as React from "react"
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils"

type AccordionItemProps = React.ComponentPropsWithoutRef<typeof Accordion.Item> & {
	className?: string;
	children?: React.ReactNode;
};

type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof Accordion.Trigger> & {
	className?: string;
	children?: React.ReactNode;
};

type AccordionContentProps = React.ComponentPropsWithoutRef<typeof Accordion.Content> & {
	className?: string;
	children?: React.ReactNode;
};

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Item
			className={cn(
				"mt-px mb-8 overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 border-none outline-none focus:border-none focus:outline-none focus:ring-0",
				className,
			)}
			{...props}
			ref={forwardedRef}
		>
			{children}
		</Accordion.Item>
	),
);

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Header className="flex">
			<Accordion.Trigger
				className={cn(
					"group flex h-[45px] flex-1 cursor-default items-center justify-between bg-mauve1 px-5 text-[15px] hover:cursor-pointer leading-none focus:outline-none focus:border-none hover:bg-mauve2 border-none outline-none ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 focus:shadow-none",
					className,
				)}
				{...props}
				ref={forwardedRef}
			>
				{children}
             <ChevronDownIcon
					className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
					aria-hidden
				/>   
			</Accordion.Trigger>
		</Accordion.Header>
	),
);


const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Content
			className={cn(
				"overflow-hidden bg-mauve2 text-[15px] text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown !border-none outline-none focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 focus:shadow-none",
				className,
			)}
			{...props}
			ref={forwardedRef}
		>
			<div className="px-5 py-[15px] border-none outline-none">{children}</div>
		</Accordion.Content>
	),
);

AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";

export { AccordionItem, AccordionTrigger, AccordionContent}
