# delgaudio.dev
The third edition of my personal portfolio website.

## Docker Build

### `linux/arm64`
```bash
docker buildx build --platform linux/arm64 --no-cache -t delgaudiov3:latest .
```

### `linux/amd64`
```bash
docker buildx build --platform linux/amd64 --no-cache -t delgaudiov3:latest .
```

## Docker Run
```bash
docker run -d -p 80:80 delgaudiov3:latest
```