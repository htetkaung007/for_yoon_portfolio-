import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useTheme } from "@mui/material";

interface CopyIconProps {
  text: string; // The text to copy
}

const CopyIcon: React.FC<CopyIconProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "copied" after 2 seconds
    });
  };

  return (
    <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
      <IconButton onClick={handleCopy} color="primary">
        <ContentCopyIcon sx={{ color: theme.palette.text.primary }} />
      </IconButton>
    </Tooltip>
  );
};

export default CopyIcon;
