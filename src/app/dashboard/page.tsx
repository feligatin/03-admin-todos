import { WidgetItem } from "@/components/widgetitem/WidgetItem";
import Image from "next/image";


export default function Home() {
  return (
    <>
      {/* TODO: dashboard/page.tsx  */}
          {/* Este contenido va dentro de page.tsx */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
     <WidgetItem/>

          </div>  
          {/* TODO: fin del dashboard/page.tsx  */}
    </>
  );
}
