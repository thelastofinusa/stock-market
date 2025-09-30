"use client";

import React from "react";
import useTradingViewWidget from "@/hooks/tradingview-widget";
import { cn } from "@/lib/utils";

interface Props {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

const TradingViewWidget: React.FC<Props> = ({
  title,
  scriptUrl,
  config,
  height = 600,
  className,
}) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="font-semibold text-2xl text-gray-100 mb-5">{title}</h3>
      )}
      <div
        className={cn("tradingview-widget-container", className)}
        ref={containerRef}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: height, width: "100%" }}
        />
      </div>
    </div>
  );
};

export default React.memo(TradingViewWidget);
