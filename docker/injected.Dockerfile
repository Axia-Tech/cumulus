FROM docker.io/library/ubuntu:20.04

# metadata
ARG VCS_REF
ARG BUILD_DATE
ARG IMAGE_NAME

LABEL io.parity.image.authors="devops-team@parity.io" \
	io.parity.image.vendor="Parity Technologies" \
	io.parity.image.title="${IMAGE_NAME}" \
	io.parity.image.description="Cumulus, the AXIA collator." \
	io.parity.image.source="https://github.com/axia-tech/axia/blob/${VCS_REF}/scripts/docker/Dockerfile" \
	io.parity.image.revision="${VCS_REF}" \
	io.parity.image.created="${BUILD_DATE}" \
	io.parity.image.documentation="https://github.com/paritytech/cumulus/"

# show backtraces
ENV RUST_BACKTRACE 1

# install tools and dependencies
RUN apt-get update && \
	DEBIAN_FRONTEND=noninteractive apt-get install -y \
		libssl1.1 \
		ca-certificates \
		curl && \
# apt cleanup
	apt-get autoremove -y && \
	apt-get clean && \
	find /var/lib/apt/lists/ -type f -not -name lock -delete; \
# add user and link ~/.local/share/axia to /data
	useradd -m -u 1000 -U -s /bin/sh -d /axia axia && \
	mkdir -p /data /axia/.local/share && \
	chown -R axia:axia /data && \
	ln -s /data /axia/.local/share/axia && \
	mkdir -p /specs

# add axia-collator binary to the docker image
COPY ./target/release/axia-collator /usr/local/bin
COPY ./axia-allychains/res/*.json /specs/

USER axia

# check if executable works in this container
RUN /usr/local/bin/axia-collator --version

EXPOSE 30333 9933 9944
VOLUME ["/axia"]

ENTRYPOINT ["/usr/local/bin/axia-collator"]
