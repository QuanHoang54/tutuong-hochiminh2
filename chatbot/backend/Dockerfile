# Sử dụng Node.js Alpine image (nhỏ gọn)
FROM node:18-alpine

# Metadata
LABEL maintainer="SCF Chatbot"
LABEL description="Backend API cho Student Cultural Front Chatbot"

# Tạo thư mục làm việc
WORKDIR /app

# Copy package files
COPY package*.json ./

# Cài đặt dependencies (production only)
RUN npm ci --only=production

# Copy source code
COPY . .

# Tạo non-root user để chạy app (security best practice)
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

# Switch sang user nodejs
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start server
CMD ["node", "index.js"]
