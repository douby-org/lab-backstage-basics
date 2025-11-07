# This Dockerfile uses a distroless Node.js 24 image based on Debian 12 as the base image.
# For the Backstage Lab, you should not need to modify this file.

FROM gcr.io/distroless/nodejs24-debian12

# Image metadata from Backstage template variables
LABEL org.opencontainers.image.title="${{ values.name }}"
LABEL org.opencontainers.image.description="${{ values.description }}"
LABEL org.opencontainers.image.vendor="${{ values.owner }}"

WORKDIR /app
COPY src/main.js ./

EXPOSE 8000

CMD ["main.js"]