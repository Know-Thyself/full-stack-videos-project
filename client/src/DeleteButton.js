import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import DeleteIcon from '@material-ui/icons/Delete'

const DeleteButton = ({ id, videoRemover, title }) => {
	const [open, setOpen] = useState(false)

	const openDialogBox = () => {
		setOpen(true)
	}

	const cancelDelete = () => {
		setOpen(false)
	}

	return (
		<div className='delete-button-container'>
			<div>
				<Button
					variant='contained'
					color='secondary'
					className='delete-button'
					startIcon={<DeleteIcon />}
					onClick={openDialogBox}
				>
					Delete
				</Button>
			</div>
			<Dialog
				open={open}
				onClose={cancelDelete}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle
					className='alert-primary delete-dialog'
					id='alert-dialog-title'
				>
					{'Are you sure you want to delete this video?'}
				</DialogTitle>
				<DialogContent className='alert-primary dialog-content'>
					<DialogContentText
						aria-labelledby='alert-dialog-title'
						id='alert-dialog-description'
					>
						The video: '{title}' will be permanently removed from our database.{' '}
						<br />
						Of course, you can add it later if you change your mind. However,
						the video will lose all of it's votes it has had so far as votes for
						newly added videos starts from 0.
					</DialogContentText>
				</DialogContent>
				<DialogActions className='alert-primary dialog-content'>
					<Button onClick={cancelDelete} variant='outlined' color='primary'>
						Cancel
					</Button>
					<Button
						id={id}
						onClick={() => {
							videoRemover(id)
							setOpen(false)
						}}
						variant='outlined'
						color='secondary'
						startIcon={<DeleteIcon />}
					>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default DeleteButton
