import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { useDrawerStore } from "@/stores/drawerStore";
import RainbowButton from '@/components/magicui/rainbow-button';

const drawerVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
};

export function GlobalDrawer() {
  const { isOpen, close } = useDrawerStore();

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && close()}>
      <DrawerContent className="mx-2.5 max-w-none sm:max-w-fit sm:mx-auto p-4 sm:p-6 rounded-2xl shadow-xl">
        <motion.div
          variants={drawerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-[480px] space-y-4 sm:space-y-6"
        >
            {/* Header */}
            <motion.div variants={itemVariants}>
              <DrawerHeader className="px-0 space-y-2.5 relative">
                <DrawerClose asChild>
                  <button 
                    className="absolute -top-2 -right-2 p-2 hover:bg-accent rounded-full transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </DrawerClose>
                
                <DrawerTitle className="text-2xl font-heading tracking-tight mt-6">
                  Let's work together
                </DrawerTitle>
                
                <p className="text-sm leading-relaxed text-muted-foreground font-body">
                  Turn your vision into reality with a partner who truly understands what your business needs.
                </p>
              </DrawerHeader>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:gap-6">
              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors"
                />
              </motion.div>

              {/* Message Text Area */}
              <motion.div variants={itemVariants}>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors resize-none h-28 sm:h-36"
                />
              </motion.div>

              {/* Send Button - Now using RainbowButton */}
              <motion.div variants={itemVariants}>
                <RainbowButton 
                  size="lg" 
                  className="w-full font-heading pt-0.5 mb-10"
                  variant="outline"
                >
                  Send a message
                </RainbowButton>
              </motion.div>
            </motion.div>
          </motion.div>
      </DrawerContent>
    </Drawer>
  );
}