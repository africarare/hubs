import React from "react";
import PropTypes from "prop-types";
import { Modal } from "../modal/Modal";
import { CloseButton } from "../input/CloseButton";
import { TextInputField } from "../input/TextInputField";
import { useForm } from "react-hook-form";
import { ApplyButton } from "../input/Button";
import { FormattedMessage } from "react-intl";
import { Column } from "../layout/Column";

export function AvatarUrlModal({ onSubmit, onClose }) {
  const { handleSubmit, register } = useForm();
  return (
    <Modal title="Custom Avatar URL" beforeTitle={<CloseButton onClick={onClose} />}>
      <Column as="form" padding center onSubmit={handleSubmit(onSubmit)}>
        <p>
          <FormattedMessage
            id="avatar-url-modal.readyplayer-description"
            defaultMessage="Create your own readyplayer.me Avatar on:"
          />{" "}
          <a href="https://africarare.readyplayer.me" target="_blank" rel="noopener noreferrer">
            <FormattedMessage
              id="avatar-url-modal.readyplayer-link"
              defaultMessage="https://africarare.readyplayer.me"
            />
          </a>
        </p>

        <TextInputField
          name="url"
          label={<FormattedMessage id="avatar-url-modal.avatar-url-label" defaultMessage="Avatar GLB URL" />}
          placeholder="https://example.com/avatar.glb"
          type="url"
          required
          ref={register}
          description={
            <a href="https://hubs.mozilla.com/docs/intro-avatars.html" target="_blank" rel="noopener noreferrer">
              <FormattedMessage
                id="avatar-url-modal.custom-avatar-docs-link"
                defaultMessage="Learn more about custom avatars"
              />
            </a>
          }
        />
        <ApplyButton type="submit" />
      </Column>
    </Modal>
  );
}

AvatarUrlModal.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func
};
